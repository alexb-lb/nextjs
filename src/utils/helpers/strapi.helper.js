import axios from "axios";

// Base fetch function to make requests to your Strapi API
export async function fetchData(resource_name, options = {}, populate = "*") {
  try {
    const { filters } = options;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/${resource_name}`,
      {
        params: {
          filters,
          populate: populate,
        },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function uploadFile(file) {
  const formData = new FormData();
  formData.append("files", file);

  const uploadRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_ACCESS_TOKEN}`, // Add access token if required
      },
      body: formData,
    }
  );

  const responseData = await uploadRes.json();
  return responseData[0]; // Returns the uploaded file object
}

export const handleFormSumission = async (data) => {
  const { firstName, lastName, email, phoneNumber, resume, coverLetter } = data;

  let uploadedResume = undefined;
  let uploadedCoverLetter = undefined;

  if (resume) {
    uploadedResume = await uploadFile(resume);
  }

  if (coverLetter) {
    uploadedCoverLetter = await uploadFile(coverLetter);
  }

  const submissionData = {
    first_name: firstName,
    last_name: lastName,
    email,
    mobile: phoneNumber,
    resume: uploadedResume?.id,
    cover_letter: uploadedCoverLetter?.id,
  };

  const submitRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/career-submissions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ data: submissionData }),
    }
  );

  const result = await submitRes.json();
  return result;
};

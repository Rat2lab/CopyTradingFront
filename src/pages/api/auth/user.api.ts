// src/api/user.api.ts

export const getUser = async (accessToken: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchUser = async (
  accessToken: string,
  userId: string | undefined,
  data: any
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProfileByNickname = async (nickName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/profile/path/${nickName}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user Info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Faking user
    console.error(error);
    throw new Error("Failed to fetch user Info");
  }
};

export async function sendGoogleAuthRequest(data: {
  email: string;
  idToken: string;
}) {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function createUser(email: string, accessToken: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ email }),
  });
}

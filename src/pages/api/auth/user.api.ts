// src/api/user.api.ts

export const patchUser = async (userId: string, data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
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
    return data.data;
  } catch (error) {
    // Faking user
    console.error(error);
    return {
      id: "123456",
      nickName: nickName,
    };
  }
};

"use server";
const accessToken = "1127942394955475|Y2HkpsVsrj1gMnQYUHGDyUhACHg"; // Replace with your actual access token

export const getFacebookPageData = async (pageId: string) => {
  const url = `https://graph.facebook.com/v17.0/${pageId}?fields=name,cover&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching Facebook page data:", error);
    return null;
  }
};

import axios from "axios";
import { BASE_API_URL } from "./constans";

const getStoryById = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    //console.log(story);
    return story;
  } catch (error) {
    console.log(error);
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(
      storyIds.slice(0, 30).map((storyId) => getStoryById(storyId))
    );
    return stories;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    const user = await axios.get(`${BASE_API_URL}/user/${id}.json`);
    return user;
  } catch (error) {
    console.log(error);
  }
};

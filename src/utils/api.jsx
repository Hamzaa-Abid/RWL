import { store } from "../store/store";

export const access_key = process.env.REACT_APP_ACCESS_KEY;

export const GENERATE_TOKEN = "generate_token_api";
export const LANGUAGE_LIST = "get_languages_list";
export const GET_CATEGORIES = "get_category";
export const GET_BREAKING_NEWS = "get_breaking_news";
export const GET_NEWS = "get_news";
export const GET_VIDEO = "get_videos";
export const GET_NEWS_BY_CATEGORY = "get_news_by_category";
export const GET_BREAKING_NEWS_ID = "get_breaking_news_by_id";
export const GET_TAG = "get_tag";
export const GET_PAGES = "get_pages";
export const GET_LIVE_STREAMING = "get_live_streaming";
export const USER_SIGNUP = "user_signup";
export const GET_LANGUAGE_JSON_DATA = "get_language_json_data";
export const GET_BOOKMARK = "get_bookmark";
export const SET_BOOKMARK = "set_bookmark";
export const SET_COMMENT = "set_comment";
export const GET_COMMENT_BY_NEWS = "get_comment_by_news";
export const DELETE_COMMENT = "delete_comment";
export const GET_NOTIFICATIONS = "get_notification";
export const GET_NEWS_BY_ID = "get_news_by_id";
export const SET_LIKE_DISLIKE = "set_like_dislike";
export const GET_NEWS_BY_TAG = "get_news_by_tag";
export const GET_WEB_SETTINGS = "get_web_settings";
export const GET_USER_NOTIFICATION = "get_user_notification";
export const DELETE_USER_NOTIFICATION = "delete_user_notification";
export const GET_FEATURE_SECTION = "get_featured_sections";
export const GET_FEATURE_SECTION_ID = "get_featured_section_by_id";
export const SET_USER_CATEGORIES = "set_user_category";
export const GET_USER_CATEGORIES = "get_news_by_user_category";
export const GET_USER_BY_ID = "get_user_by_id";
export const SET_NEWS_VIEW = "set_news_view";
export const SET_BREAKING_NEWS_VIEW = "set_breaking_news_view";
export const GET_SETTINGS = "get_settings";
export const GET_AD_SPACE_NEWS_DETAILS = "get_ad_space_news_details";
export const UPDATE_PROFILE = "update_profile";
export const SET_PROFILE_IMAGE = "set_profile_image";
export const SET_NEWS = "set_news";
export const DELETE_IMAGES = "delete_news_images";
export const DELETE_NEWS = "delete_news";
export const GET_SUBCATEGORY_BY_CATEGORY = "get_subcategory_by_category";
export const SET_COMMENT_LIKE_DISLIKE = "set_comment_like_dislike";
export const SET_FLAG = "set_flag";
export const REGISTER_TOKEN = "register_token";
export const GET_LOCATION ="get_location"
export const DELETE_ACCOUNT = 'delete_user'

//get language from storage
export const getLanguage = () => {
  let language = store.getState().languages.currentLanguage;

  if (language) {
    return language;
  }
  return false;
};

// get user
export const getUser = () => {
  let user = store.getState().user
  if (user.data !== null) {
    return user.data.id;
  } else {
    return user = "0";
  }
}
// location_news_mode 

export const getLocation = () =>{
 
}
// 1. generate token
export const generateTokenApi = () => {
  return {
    url: `${GENERATE_TOKEN}`,
    method: "POST",
    data: {
      access_key: access_key,
    },
    authorizationHeader: false,
  };
};

// 2. languages
export const getLanguagesApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${LANGUAGE_LIST}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 3. get category (here:- language not get globally due create news)
export const getCategoriesApi = (offset, limit, language_id) => {
  return {
    url: `${GET_CATEGORIES}`,
    method: "POST",
    data: {
      access_key: access_key,
      offset: offset,
      limit: limit,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 4. get breaking news
export const getBreakingNewsApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_BREAKING_NEWS}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 5. get news
export const getNewsApi = (offset, limit, get_user_news, search, latitude, longitude) => {
  let { id: language_id } = getLanguage();
  let user = getUser();
  let data = new FormData()
  data.append('access_key', access_key);
  data.append('language_id', language_id);
  data.append('user_id', user);
  data.append('offset', offset);
  data.append('limit', limit);
  data.append('get_user_news', get_user_news);
  data.append('search', search);
  if(latitude != null) data.append('latitude', latitude);
  if(longitude != null) data.append('longitude', longitude)
  
  return {
    url: `${GET_NEWS}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
};

// 6. get video
export const getVideoApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_VIDEO}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 7. get news by category
export const getNewsByCategoryApi = (category_id, subcategory_id, offset, limit, latitude, longitude) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  let data = new FormData();
  data.append('access_key', access_key);
  data.append('language_id', language_id);
  data.append('user_id', user);
  data.append('category_id', category_id);
  data.append('subcategory_id', subcategory_id);
  data.append('offset', offset);
  data.append('limit', limit);
  if(latitude != null) data.append('latitude', latitude);
  if(longitude != null) data.append('longitude', longitude)
  return {
    url: `${GET_NEWS_BY_CATEGORY}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
};

// 8. get breaking news id
export const getBreakingNewsIdApi = (breaking_news_id) => {
  let { id: language_id } = getLanguage();
  let user = getUser();
  return {
    url: `${GET_BREAKING_NEWS_ID}`,
    method: "POST",
    data: {
      access_key: access_key,
      breaking_news_id: breaking_news_id,
      user_id: user,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 9. get tag
export const getTagApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_TAG}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

//10. get pages
export const getPagesApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_PAGES}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

//11. get live streaming
export const getLiveStreamingApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_LIVE_STREAMING}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

//12. user signup
export const userSignUpApi = (firebase_id, name, email, mobile, type, profile, status, fcm_id) => {
  return {
    url: `${USER_SIGNUP}`,
    method: "POST",
    data: {
      access_key: access_key,
      firebase_id: firebase_id, //Firebase ID
      name: name,
      email: email,
      mobile: mobile,
      type: type, /// gmail / fb / apple / mobile
      profile: profile, //image url
      status: status,   // 1 - Active & 0 Deactive
      fcm_id: fcm_id,
    },
    authorizationHeader: true,
  };
};

//13. get languages json
export const getLanguageJsonDataApi = (code) => {
  return {
    url: `${GET_LANGUAGE_JSON_DATA}`,
    method: "POST",
    data: {
      access_key: access_key,
      code: code,
    },
    authorizationHeader: true,
  };
};

//14. get bookmark
export const getBookmarkApi = (offset, limit) => {
  let { id: language_id } = getLanguage();
  let user = getUser();
  return {
    url: `${GET_BOOKMARK}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      language_id: language_id,
      offset: offset,
      limit: limit,
    },
    authorizationHeader: true,
  };
};

//15. set bookmark
export const setBookmarkApi = (news_id, status) => {
  let user = getUser();
  return {
    url: `${SET_BOOKMARK}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      news_id: news_id,
      status: status,  //1-bookmark, 0-unbookmark
    },
    authorizationHeader: true,
  };
};

// 16. set comment
export const setCommentApi = (parent_id, news_id, message) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${SET_COMMENT}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      parent_id: parent_id,   //if not exists, set 0
      news_id: news_id,
      message: message,
      language_id: language_id
    },
    authorizationHeader: true,
  };
};

// 17. get comment
export const getCommentByNewsApi = (news_id, offset, limit) => {
  let user = getUser();
  return {
    url: `${GET_COMMENT_BY_NEWS}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      news_id: news_id,
      offset: offset,
      limit: limit,
    },
    authorizationHeader: true,
  };
};

//18. delete comment
export const deleteCommentApi = (comment_id) => {
  let user = getUser();
  return {
    url: `${DELETE_COMMENT}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      comment_id: comment_id
    },
    authorizationHeader: true,
  };
};

//19. get notification
export const getNotificationsApi = (offset, limit) => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_NOTIFICATIONS}`,
    method: "POST",
    data: {
      access_key: access_key,
      offset: offset,
      limit: limit,
      language_id: language_id
    },
    authorizationHeader: true,
  };
};

//20. get news by id
export const getNewsByIdApi = (news_id, language_id) => {
  let user = getUser();
  // let { id: language_id } = getLanguage();
  return {
    url: `${GET_NEWS_BY_ID}`,
    method: "POST",
    data: {
      access_key: access_key,
      news_id: news_id,
      user_id: user,
      language_id: language_id
    },
    authorizationHeader: true,
  };
};

//21. set likedislike
export const setLikeDisLikeApi = (news_id, status) => {
  let user = getUser();
  return {
    url: `${SET_LIKE_DISLIKE}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      news_id: news_id,
      status: status,    // 1=like, 2=dislike, 0=none
    },
    authorizationHeader: true,
  };
};

//22. get news by tag
export const getNewsByTagApi = (tag_id, latitude, longitude) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  let data = new FormData();
  data.append('access_key', access_key);
  data.append('language_id', language_id);
  data.append('user_id', user);
  data.append('tag_id', tag_id);
  if(latitude != null) data.append('latitude', latitude);
  if(longitude != null) data.append('longitude', longitude)
  return {
    url: `${GET_NEWS_BY_TAG}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
};

//23. get web settings
export const getWebSettingsApi = () => {
  return {
    url: `${GET_WEB_SETTINGS}`,
    method: "POST",
    data: {
      access_key: access_key,
    },
    authorizationHeader: true,
  };
};

//24. get user notification
export const getUserNotificationApi = (offset, limit) => {
  let user = getUser();
  return {
    url: `${GET_USER_NOTIFICATION}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      offset: offset,
      limit: limit,
    },
    authorizationHeader: true,
  };
};

//25. delete user notification
export const DeleteUserNotificationApi = (id) => {
  return {
    url: `${DELETE_USER_NOTIFICATION}`,
    method: "POST",
    data: {
      access_key: access_key,
      id: id,
    },
    authorizationHeader: true,
  };
};

//26. get feature sections
export const getFeatureSectionApi = (offset, limit, latitude, longitude) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  let data = new FormData();
  data.append('access_key', access_key);
  data.append('language_id', language_id);
  data.append('user_id', user);
  data.append('offset', offset);
  data.append('limit', limit);
  if(latitude != null) data.append('latitude', latitude);
  if(longitude != null) data.append('longitude', longitude)
  return {
    url: `${GET_FEATURE_SECTION}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
};

// 27. get feature section by id
export const getFeatureSectionByIdApi = (section_id, offset, limit, latitude, longitude) => {
  let user = getUser();
  let data = new FormData();
  let { id: language_id } = getLanguage();
  data.append('access_key', access_key);
  data.append('language_id', language_id);
  data.append('user_id', user);
  data.append('section_id', section_id);
  data.append('offset', offset);
  data.append('limit', limit);
  if(latitude != null) data.append('latitude', latitude);
  if(longitude != null) data.append('longitude', longitude)
  return {
    url: `${GET_FEATURE_SECTION_ID}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
};

// 28. set user categories
export const setUserCategoriesApi = (category_id) => {
  let user = getUser();
  return {
    url: `${SET_USER_CATEGORIES}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      category_id: category_id,
    },
    authorizationHeader: true,
  };
};

// 29. get user categories
export const getUserCategoriesApi = (category_id, offset, limit) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_USER_CATEGORIES}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      category_id: category_id,
      offset: offset,
      limit: limit,
      language_id: language_id
    },
    authorizationHeader: true,
  };
};

// 30. get user by id
export const getUserByIdApi = () => {
  let user = getUser();
  return {
    url: `${GET_USER_BY_ID}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
    },
    authorizationHeader: true,
  };
};

// 31. set news view
export const setNewsViewApi = (news_id) => {
  let user = getUser();
  return {
    url: `${SET_NEWS_VIEW}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      news_id: news_id,
    },
    authorizationHeader: true,
  };
};

// 32. set breaking news view
export const setBreakingNewsViewApi = (breaking_news_id) => {
  let user = getUser();
  return {
    url: `${SET_BREAKING_NEWS_VIEW}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      breaking_news_id: breaking_news_id,
    },
    authorizationHeader: true,
  };
};

// 33. get settings
export const getSettingsApi = () => {
  return {
    url: `${GET_SETTINGS}`,
    method: "POST",
    data: {
      access_key: access_key,
    },
    authorizationHeader: true,
  };
};

// 34. get ad space news details
export const getAdsSpaceNewsDetailsApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_AD_SPACE_NEWS_DETAILS}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 35. update profile
export const updateProfileApi = (name, mobile, email) => {
  let user = getUser();
  return {
    url: `${UPDATE_PROFILE}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      name: name,
      mobile: mobile,  //{optional}
      email: email, //{optional}
    },
    authorizationHeader: true,
  };
};

// 36. update profile image
export const updateProfileImageApi = (image) => {
  let user = getUser();
  let data = new FormData();
  data.append("access_key", access_key)
  data.append("user_id", user)
  data.append("image", image);
  return {
    url: `${SET_PROFILE_IMAGE}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
};

// 37. set news
export const setnewsApi = (action_type, category_id, subcategory_id, tag_id, title, content_type, content_data, description, image, ofile, show_till, language_id,location_id) => {
  let user = getUser();
  let data = new FormData();
  let createToEdit = store.getState().createNews.createToEdit;
  let news_id = createToEdit ? createToEdit.id : null;
  data.append("access_key", access_key)
  if (action_type === 2) {
    data.append("news_id", news_id)
  }
  data.append("action_type", action_type) //1-add, 2-update if action_type- 2 => news_id:1
  data.append("user_id", user)
  data.append("category_id", category_id)
  data.append("subcategory_id", subcategory_id)
  data.append("tag_id", tag_id)
  data.append("title", title)
  data.append("content_type", content_type)
  data.append("content_data", content_data)
  data.append("description", description)
  data.append("image", image)
  ofile.forEach(element => {
    data.append("ofile[]", element)
  });
  data.append("show_till", show_till)
  data.append("language_id", language_id)
  data.append("location_id", location_id)
  return {
    url: `${SET_NEWS}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
}

// 38. delete image for news
export const deleteimageApi = (image_id) => {
  return {
    url: `${DELETE_IMAGES}`,
    method: "POST",
    data: {
      access_key: access_key,
      id: image_id,
    },
    authorizationHeader: true,
  };
};

// 39. delete news
export const deletenewsApi = (news_id) => {
  return {
    url: `${DELETE_NEWS}`,
    method: "POST",
    data: {
      access_key: access_key,
      id: news_id,
    },
    authorizationHeader: true,
  };
};


// 40. subcatgory by category
export const getsubcategorybycategoryApi = (category_id) => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_SUBCATEGORY_BY_CATEGORY}`,
    method: "POST",
    data: {
      access_key: access_key,
      category_id: category_id,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 41. set comment like dislike
export const set_comment_like_dislike_Api = (comment_id, status) => {
  let { id: language_id } = getLanguage();
  let user = getUser();
  return {
    url: `${SET_COMMENT_LIKE_DISLIKE}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id: user,
      comment_id: comment_id,
      status: status,   // 1=like, 2=dislike, 0=none
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 42. set flag
export const set_flag_Api = (comment_id, news_id, message) => {
  let user = getUser();
  return {
    url: `${SET_FLAG}`,
    method: "POST",
    data: {
      access_key: access_key,
      comment_id: comment_id,
      user_id: user,
      news_id: news_id,   // 1=like, 2=dislike, 0=none
      message: message,
    },
    authorizationHeader: true,
  };
};


// 43. register token

export const register_token_api = (token, latitude, longitude) => {
  let { id: language_id } = getLanguage();
  let data = new FormData()
  data.append('access_key', access_key);
  data.append('language_id', language_id);
  data.append('token', token);
  if(latitude != null) data.append('latitude', latitude);
  if(longitude != null) data.append('longitude', longitude)
  return {
    url: `${REGISTER_TOKEN}`,
    method: "POST",
    data,
    authorizationHeader: true,
  };
};

// 44. get tag
export const getlocationapi = () => {
  
  return {
    url: `${GET_LOCATION}`,
    method: "POST",
    data: {
      access_key: access_key,
    },
    authorizationHeader: true,
  };
};

// 45. acccount delete
export const accountdeleteApi = () => {
  let user = getUser()
  return {
    url: `${DELETE_ACCOUNT}`,
    method: 'POST',
    data: {
      access_key: access_key,
      user_id: user
    },
    authorizationHeader: true
  }
}

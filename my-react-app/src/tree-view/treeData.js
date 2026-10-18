
import data from "../data.json";

const usersByLanguage = Object.groupBy(
  data,
  data => data.language
);

const treeData = [
  {
    id: "all-users",
    label: "All Users",
    children: Object.entries(usersByLanguage).map(
      ([language, languageUsers]) => ({
        id: `language-${language}`,
        label: `${language} (${languageUsers.length})`,
        children: languageUsers.map(user => ({
          id: user.id,
          label: user.name
        }))
      })
    )
  }
];

export default treeData;

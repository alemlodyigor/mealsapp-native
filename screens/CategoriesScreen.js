import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}  /> 
}

const CategoriesScreen = () => {
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id } renderItem={renderCategoryItem} />;
};

export default CategoriesScreen;

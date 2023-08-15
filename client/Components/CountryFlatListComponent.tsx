import React, { memo } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

type ListItemProps = {
  item: {
    label: string;
    value: string;
    regions: Array<{ name: string; shortCode: string }>;
  };
  onPress: (selectedCountry: {
    label: string;
    value: string;
    regions: Array<{ name: string; shortCode: string }>;
  }) => void;
};

const ListItem: React.FC<ListItemProps> = memo(({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Text style={{ color: "#000", fontSize: 16 }}>{item.label}</Text>
    </TouchableOpacity>
  );
});

type MyFlatListComponentProps = {
  data: Array<{
    label: string;
    value: string;
    regions: Array<{ name: string; shortCode: string }>;
  }>;
  onSelect: (selectedCountry: {
    label: string;
    value: string;
    regions: Array<{ name: string; shortCode: string }>;
  }) => void;
};

const CountryFlatListComponent: React.FC<MyFlatListComponentProps> = ({
  data,
  onSelect,
}) => {
  const renderItem = ({ item }: { item: (typeof data)[number] }) => {
    return <ListItem item={item} onPress={onSelect} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.value}
        extraData={data}
      />
    </View>
  );
};

export default CountryFlatListComponent;

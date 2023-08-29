import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/authSlice";
import HeaderTemplate from "../Components/HeaderTemplate";

const ProfileScreen = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const [editableFields, setEditableFields] = useState({
    ...user,
  });

  const handleEditField = (field: string, value: string) => {
    setEditableFields((prevFields: any) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    dispatch(updateUser(editableFields)); // Dispatch the updateUser action with updated data
  };

  console.log(user);
  return (
    <HeaderTemplate>
      <View style={{ flex: 1, padding: 10 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.heading}>User Profile</Text>
            <Text style={styles.label}>Username:</Text>
            <TextInput
              style={styles.input}
              value={editableFields.username}
              onChangeText={(text) => handleEditField("username", text)}
              editable={true}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={editableFields.email}
              onChangeText={(text) => handleEditField("email", text)}
              editable={true}
            />
            <Text style={styles.label}>Phone:</Text>
            <TextInput
              style={styles.input}
              value={editableFields.phone}
              onChangeText={(text) => handleEditField("phone", text)}
              editable={true}
            />
            <Text style={styles.label}>Gender:</Text>
            <TextInput
              style={styles.input}
              value={editableFields.gender}
              onChangeText={(text) => handleEditField("gender", text)}
              editable={true}
            />
            <Text style={styles.label}>Blood Group:</Text>
            <TextInput
              style={styles.input}
              value={editableFields.bloodGroup}
              onChangeText={(text) => handleEditField("bloodGroup", text)}
              editable={true}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.editButton} onPress={handleSaveChanges}>
          <Text style={styles.editButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </HeaderTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: "#1686B8",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;

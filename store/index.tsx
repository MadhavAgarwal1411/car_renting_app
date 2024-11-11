import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export async function saveRefreshToken(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

export async function getRefreshToken(key: string): Promise<string | null> {
  return await AsyncStorage.getItem(key);
}

export async function deleteRefreshToken(key: string) {
  await AsyncStorage.removeItem(key);
}
export async function saveAccessToken(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

export async function getAccessToken(key: string): Promise<string | null> {
  return await AsyncStorage.getItem(key);
}

export async function deleteAccessToken(key: string) {
  await AsyncStorage.removeItem(key);
}



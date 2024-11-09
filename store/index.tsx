import * as SecureStore from "expo-secure-store";

export async function saveRefreshToken(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getRefreshToken(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}

export async function deleteRefreshToken(key: string) {
  await SecureStore.deleteItemAsync(key);
}
export async function saveAccessToken(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getAccessToken(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}

export async function deleteAccessToken(key: string) {
  await SecureStore.deleteItemAsync(key);
}



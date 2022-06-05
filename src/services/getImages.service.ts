import { ImageType } from "../types/image";
import { logError, logInfo } from "../utils/logs.utils"

// TEST
export async function getImages(): Promise<any> {
  try {
    const res = await fetch('https://picsum.photos/v2/list');
    const data: Promise<any> = await res.json();
    logInfo('data', data);
    if (!data || data == null) throw 'Error while fetching data';

    return data;
  } catch (error) {
    logError(error);
  }
}
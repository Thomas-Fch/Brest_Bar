import { barsTypesList } from './BarsTypesList';

export const getBarsType:(name:string) => string = (name: string) => {
  for (const { keywords, type } of barsTypesList) {
    if (keywords.some((keyword) => name.toLowerCase().includes(keyword.toLowerCase()))) {
      return type;
    }
  }
  return ""
};
import {
  GiphyDataItem,
  GiphyItemSchema,
  GiphyResponse,
} from '../interfaces/giphy.interface';

export class GiphyMapper {
  static parseGiphyApiToGiphySchema(item: GiphyDataItem): GiphyItemSchema {
    return {
      id: item.id,
      title: item.title,
      url: item.url,
    };
  }

  static parseDataGiphyToGiphySchema(
    response: GiphyResponse["data"]
  ): GiphyItemSchema[] {
    const data = response.map((giphyItem) =>
      this.parseGiphyApiToGiphySchema(giphyItem)
    );
    return data;
  }
}

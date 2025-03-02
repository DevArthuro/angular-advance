import {
  GiphyDataItem,
  GIF,
  GiphyResponse,
} from '../interfaces/giphy.interface';

export class GiphyMapper {
  static parseGiphyApiToGiphySchema(item: GiphyDataItem): GIF {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static parseDataGiphyToGiphySchema(response: GiphyResponse['data']): GIF[] {
    const data = response.map((giphyItem) =>
      this.parseGiphyApiToGiphySchema(giphyItem)
    );
    return data;
  }
}

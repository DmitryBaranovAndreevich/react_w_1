interface IItem {
  id: string;
  primaryImage: {
    id: string;
    url: string;
  };
  releaseDate: {
    day: number;
    month: number;
    year: number;
  };
  releaseYear: {
    year: number;
  };
  titleText: {
    text: string;
  };
  titleType: {
    text: string;
  };
}

export default IItem;

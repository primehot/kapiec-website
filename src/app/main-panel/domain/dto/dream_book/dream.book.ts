export class DreamBook {
  id: number;
  title: string;
  author: string;
  content: string;
}

export class ShortDreamBook {
  id: number;
  data: string;
}

export class DreamBookTitlePage {
  title: string;
  dreamBooks: DreamBook[];
}

export class ItemIndexingProgress {

  filename: String;
  filesize: number;
  progress: number;
}

export class IndexingProgress {

  itemProgress: ItemIndexingProgress[];
}

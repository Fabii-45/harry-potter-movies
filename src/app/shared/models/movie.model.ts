export class Movie {
  constructor(
    public id: string,
    public title: string,
    public duration: string,
    public budget: string,
    public releaseDate: string,
    public boxOffice?: string,
    public cinematographers?: string[],
    public poster?: string,
    public producers?: string[],
    public summary?: string
  ) {}
}

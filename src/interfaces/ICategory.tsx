export default interface ICategory {
  name: string;
  slug: string;
  child: { name: string, slug: string }[];
}

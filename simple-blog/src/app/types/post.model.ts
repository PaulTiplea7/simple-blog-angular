export interface Post {
  id: string;
  title: string;
  tags: string[];
  content: string;
  image_url?: string | null;
  author: string;
  email: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  priceFormatted: string;
  primaryImage: ImageAsset;
  hoverImage?: ImageAsset;
  editorialNote?: string;
  tag?: string;
}

export interface CollectionDestination {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageAsset;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

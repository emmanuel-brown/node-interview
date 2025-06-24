// User
export interface UserI {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
  // Post
  export interface PostI {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  // Comment
  export interface CommentI {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  
  // Photo
  export interface PhotoI {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }
  
  // Todo
  export interface TodoI {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  // Album
  export interface AlbumI {
    userId: number;
    id: number;
    title: string;
  }
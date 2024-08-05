
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
  }
  
  interface Address {
    street: string;
    city: string;
  }
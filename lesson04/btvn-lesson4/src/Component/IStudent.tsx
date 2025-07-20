// Định nghĩa interface và xuất mặc định
export default interface IStudent {
  id: number;
  name: string;
  age?: number; // thuộc tính tùy chọn
  gender?: string; // thuộc tính tùy chọn
  add: string;
  email: string;
  phone: number;
}

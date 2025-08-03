// Định nghĩa interface và xuất mặc định
export default interface IStudent {
  id: number;
  code: string;
  name: string;
  age?: number; // thuộc tính tùy chọn
  gender: string;
}

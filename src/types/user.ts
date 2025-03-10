export type UserRole = 'admin' | 'normal' | 'lifetime' | 'business';

export type UserStatus = 'active' | 'disabled' | 'pending';

export interface UserPreference {
  id: string;
  name: string;
  description?: string;
}

export interface User {
  id: string;          // UUID
  memberNo: string;    // 會員編號 (C001, V001, B001 etc.)
  username: string;    // 帳號
  password?: string;   // 密碼（可選，僅用於創建/更新時）
  name: string;        // 姓名
  email: string;       // 電子郵件
  role: UserRole;      // 會員等級
  status: UserStatus;  // 狀態
  firstName?: string;
  lastName?: string;
  phone?: string;
  contactInfo?: string;
  preferences: string[]; // 使用者偏好
  isFirstLogin: boolean; // 是否首次登入
  createdAt: Date;     // 建立時間
  updatedAt: Date;     // 更新時間
}

export interface InvestmentPreference {
  id: string;
  name: string;
  description: string;
  category: 'risk' | 'type' | 'period';
  order: number;
}

export interface UserPreferences {
  userId: string;
  preferences: string[]; // InvestmentPreference IDs
  riskTolerance: 'low' | 'medium' | 'high';
  investmentPeriod: 'short' | 'medium' | 'long';
  updatedAt: Date;
}

export const USER_ROLE_PREFIX: Record<UserRole, string> = {
  normal: 'C',
  lifetime: 'V',
  business: 'B',
  admin: 'A'
}; 
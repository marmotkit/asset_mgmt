// 投資類型
export type InvestmentType = 'movable' | 'immovable';  // 動產 | 不動產

// 投資狀態
export type InvestmentStatus =
    | 'active'      // 進行中
    | 'completed'   // 已完成
    | 'terminated'  // 已終止
    | 'pending';    // 審核中

// 基本投資項目介面
interface BaseInvestment {
    id: string;
    companyId: string;          // 關聯的公司 ID
    name: string;               // 投資項目名稱
    description: string;        // 項目描述
    amount: number;             // 投資金額
    startDate: Date;           // 開始日期
    endDate?: Date;            // 結束日期
    status: InvestmentStatus;   // 狀態
    notes?: string;            // 備註
    createdAt: Date;
    updatedAt: Date;
}

// 動產投資
export interface MovableInvestment extends BaseInvestment {
    type: 'movable';
    assetType: string;         // 動產類型
    serialNumber?: string;     // 序號
    manufacturer?: string;     // 製造商
    purchaseDate: Date;       // 購入日期
}

// 不動產投資
export interface ImmovableInvestment extends BaseInvestment {
    type: 'immovable';
    location: string;          // 位置
    area: number;             // 面積
    propertyType: string;     // 不動產類型
    registrationNumber?: string; // 登記號碼
}

// 通用投資型別
export type Investment = MovableInvestment | ImmovableInvestment; 
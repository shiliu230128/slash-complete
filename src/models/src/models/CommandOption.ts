
// 原有代码保留，仅新增2个可选字段（兼容旧代码）
export interface CommandOption {
  id: number; // 新增：唯一ID（用于拖拽/排序）
  name: string;
  backupName?: string;
  description?: string;
  // 新增：编辑状态（可选，不影响原有功能）
  isEditing?: boolean;
}

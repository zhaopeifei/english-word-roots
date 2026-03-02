import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 前端/SSR 使用的客户端（受 RLS 约束）
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 导入脚本使用的管理员客户端（绕过 RLS）
export function createAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for admin operations');
  }
  return createClient(supabaseUrl, serviceRoleKey);
}

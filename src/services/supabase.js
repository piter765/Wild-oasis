import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xqcvqvgyigjfpmuohrme.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxY3Zxdmd5aWdqZnBtdW9ocm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNzA5MTgsImV4cCI6MjAwOTc0NjkxOH0.G8av57B1n-w-UPlB2mbrIBlNPh8n2NZyC87zSOkKicg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
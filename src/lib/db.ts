import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://qgpdcaqkdxlivymludpy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFncGRjYXFrZHhsaXZ5bWx1ZHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwMjkyNzEsImV4cCI6MTk4NzYwNTI3MX0.lV-A0oohEzExsv-LIH96TeW1ua6Hw4F80gO1jOC752E",
);

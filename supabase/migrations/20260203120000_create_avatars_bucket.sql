-- Create the 'avatars' storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Set up Row Level Security policies for the 'avatars' bucket
-- Allow users to view their own avatars
CREATE POLICY "Allow individual read access"
ON storage.objects FOR SELECT
USING (auth.uid()::text = (storage.foldername(name))[1]);

-- Allow users to upload their own avatars
CREATE POLICY "Allow individual upload access"
ON storage.objects FOR INSERT
WITH CHECK (auth.uid()::text = (storage.foldername(name))[1]);

-- Allow users to update their own avatars
CREATE POLICY "Allow individual update access"
ON storage.objects FOR UPDATE
USING (auth.uid()::text = (storage.foldername(name))[1]);

-- Allow users to delete their own avatars
CREATE POLICY "Allow individual delete access"
ON storage.objects FOR DELETE
USING (auth.uid()::text = (storage.foldername(name))[1]);

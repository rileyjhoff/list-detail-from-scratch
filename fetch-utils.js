const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpobW93Z2N5YnRlcWdpd3dyeGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5OTQ2NjYsImV4cCI6MTk2MzU3MDY2Nn0.e8IeeowEcZ9C7aazuyONAepUhFvdOgDSLq8EKRJWwls';
const SUPABASE_URL = 'https://zhmowgcybteqgiwwrxln.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPlayerData() {
    const response = await client
        .from('players')
        .select('*');

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
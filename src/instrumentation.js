export async function register() {
    const dns = await import('node:dns');
    dns.setDefaultResultOrder('ipv4first');
    dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
}
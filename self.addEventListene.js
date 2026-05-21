self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.matchAll({type: 'window'}).then(clis => {
        if (clis.length > 0) return clis[0].focus();
        return clients.openWindow('/');
    }));
});
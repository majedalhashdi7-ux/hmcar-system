import { fetchAPI } from './index';

export const parts = {
    list: (params: Record<string, string | number | boolean> = {}) => {
        const query = new URLSearchParams(params as Record<string, string>).toString();
        return fetchAPI(`/api/v2/parts?${query}`);
    },
    
    create: (data: Record<string, unknown>) => fetchAPI('/api/v2/parts', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    
    update: (id: string, data: Record<string, unknown>) => fetchAPI(`/api/v2/parts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    
    delete: (id: string) => fetchAPI(`/api/v2/parts/${id}`, {
        method: 'DELETE',
    }),
    
    scrape: () => fetchAPI('/api/v2/parts/scrape/brands', {
        method: 'POST'
    }),
    
    toggleStock: (id: string) => fetchAPI(`/api/v2/parts/${id}/toggle-stock`, {
        method: 'PATCH'
    }),
};

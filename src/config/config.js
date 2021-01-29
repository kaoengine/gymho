import deepFreeze from 'deep-freeze';


const conf = {
api: {
    urls: {
    //   serviceHealth: (namespace: string, service: string) => `api/namespaces/${namespace}/services/${service}/health`,
    //   serviceMetrics: (namespace: string, service: string) => `api/namespaces/${namespace}/services/${service}/metrics`,
    //   serviceDashboard: (namespace: string, service: string) =>
    //     `api/namespaces/${namespace}/services/${service}/dashboard`,
      signin: 'http://localhost:8080/api/auth/signin',
      signup: 'http://localhost:8080/api/auth/signup',
    }
  }
}

export const config = deepFreeze(conf);
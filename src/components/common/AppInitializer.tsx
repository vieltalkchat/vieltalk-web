'use client'

import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProgressProvider } from '@bprogress/next/app'
import { useMediaQuery } from '@/hooks'
import { store } from '@/store'

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
})

export function JotaiProviders({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}

export function ClientConfigProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useMediaQuery()

  return (
    <ProgressProvider height="4px" color="hsl(var(--primary, black))" options={{ showSpinner: false }} shallowRouting>
      {children}
    </ProgressProvider>
  )
}

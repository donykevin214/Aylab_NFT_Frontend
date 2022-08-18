import type { GetStaticProps, GetServerSideProps } from 'next'

export interface GetI18nStaticProps extends GetStaticProps {
  locale: string
  query: { [key: string]: never }
}

export interface GetI18nServerSideProps extends GetServerSideProps {
  locale: string
  query: { [key: string]: never }
}

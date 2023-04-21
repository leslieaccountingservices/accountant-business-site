import Head from "next/head";

export default function MetaTags({ title, description, pageUrl, imgUrl="/static/images/logo.jpg", keywords="tax report, taxes, tax, 1099, expense, local accountant, local accountant chicago, chicago accountant, tax deadline this year, tax deadline, turbotax vs accountant, turbotax, freetaxusa vs accountant, freetaxusa vs turbotax, freetaxusa, when are taxes due, quickbooks, learn quickbooks, 1040, 1040 form, 1098, 1098 form, 1098 t form, w-2" }: { title: string, pageUrl: string, description: string, imgUrl: string, keywords?: string }) {
  return (
    <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content={keywords}></meta>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imgUrl} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imgUrl} />
    </Head>
  )
}

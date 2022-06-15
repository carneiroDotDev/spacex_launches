import CardComponent, { CardProps } from "./Card"

interface LaunchesListProps {
  docs?: CardProps[]
  loading: boolean
}

const LaunchesList: React.FunctionComponent<LaunchesListProps> = ({
  docs,
  loading,
}) => {
  if (loading || !docs || !docs.length) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      {docs.map(doc => (
        <CardComponent key={doc.id} {...doc} />
      ))}
    </>
  )
}

export default LaunchesList

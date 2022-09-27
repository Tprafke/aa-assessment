import DropdownListItem from "./DropdownListItem";

export default function DropdownList({ filteredIdentities }) {
  return (
    <>
      {filteredIdentities.map((identity) => (
        <DropdownListItem identity={identity} key={identity.id} />
      ))}
    </>
  );
}

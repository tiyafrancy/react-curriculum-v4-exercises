function SnackList() {
  const snacks = [
    { name: 'Chips', rank: 2 },
    { name: 'Chocolate', rank: 1 },
    { name: 'Cookies', rank: 3 },
    { name: 'dry nuts', rank: 4 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <ol>
        {sortedSnacks.map((snacks, index) => (
          <li key={index}>
            {snacks.name} - Rank {snacks.rank}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SnackList;

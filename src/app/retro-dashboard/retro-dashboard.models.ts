export interface TeamBoard {
    name: string;
    boards: Board[];
}

export interface Board {
    cardCount: number;
    chartData: ChartData[];
    columns: BoardColumn[];
    createdAt: string;
    name: string;
}

export interface BoardColumn {
    name: string;
    cards: Card[];
}
export interface Card {
    description: string;
}

export interface ChartData {
    name: string,
    value: number
}


// Mocks

export const BOARDS: Board[] = [
    {
        cardCount: 0,
        chartData: [],
        columns: [
            {
                name: "Went Well",
                cards: [
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                ],
            },
            {
                name: "To Improve",
                cards: [
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    }
                ]
            },
            {
                name: "Action Items",
                cards: [
                    {
                        description: "a"
                    }
                ],
            }
        ],
        createdAt: '11/10/2020',
        name: 'Sprint Boreas'
    },
    {
        cardCount: 0,
        chartData: [],
        columns: [
            {
                name: "Went Well",
                cards: [
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                ],
            },
            {
                name: "To Improve",
                cards: [
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    },
                    {
                        description: "a"
                    }
                ]
            },
            {
                name: "Action Items",
                cards: [
                    {
                        description: "a"
                    }
                ],
            }
        ],
        createdAt: '11/20/2020',
        name: 'Sprint Ares'
    }
]

export const TEAM_BOARDS: TeamBoard[] = [
    {
        name: 'Tadoo TeamBoard',
        boards: BOARDS
    },
]


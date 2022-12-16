import {
  HomeIcon,
  AudioIcon,
  DiscoverIcon,
  LikedSongsIcon,
  MediaPlaylistIcon,
  MusicAlbumIcon,
  RecordsIcon,
} from "components/Icons"

export const drawerRoutes = [
  {
    type: "group",
    children: [
      {
        to: "",
        icon: HomeIcon,
        label: "Home",
        items: [],
      },
      {
        to: "/discover",
        icon: DiscoverIcon,
        label: "Discover",
        items: [],
      },
    ],
  },
  {
    type: "group",
    hideDivider: true,
    children: [
      {
        items: [],
        to: "/library",
        icon: MusicAlbumIcon,
        label: "Your Library",
      },
      {
        items: [],
        icon: LikedSongsIcon,
        to: "/liked-songs",
        label: "Liked Songs",
      },
      {
        items: [],
        icon: AudioIcon,
        to: "/recently-played",
        label: "Recently Played",
      },
      {
        items: [],
        icon: MediaPlaylistIcon,
        to: "/create-playlist",
        label: "Create Playlist",
      },
    ],
  },
  {
    type: "group",
    searchable: true,
    children: [
      {
        to: "",
        icon: RecordsIcon,
        label: "My Playlist",
        items: [
          {
            to: "/riff-and-runs",
            label: "Riff & Runs",
          },
          {
            to: "/african-heat",
            label: "African heat",
          },
          {
            to: "/saturday-was-good",
            label: "Saturday was good",
          },
          {
            to: "/Running-from-monday",
            label: "Running from monday alone in my head",
          },
          {
            to: "/riff-and-runs",
            label: "Riff & Runs",
          },
          {
            to: "/african-heat",
            label: "African heat",
          },
          {
            to: "/saturday-was-good",
            label: "Saturday was good",
          },
          {
            to: "/Running-from-monday",
            label: "Running from monday alone in my head",
          },
          {
            to: "/riff-and-runs",
            label: "Riff & Runs",
          },
          {
            to: "/african-heat",
            label: "African heat",
          },
          {
            to: "/saturday-was-good",
            label: "Saturday was good",
          },
          {
            to: "/Running-from-monday",
            label: "Running from monday alone in my head",
          },
          {
            to: "/riff-and-runs",
            label: "Riff & Runs",
          },
          {
            to: "/african-heat",
            label: "African heat",
          },
          {
            to: "/saturday-was-good",
            label: "Saturday was good",
          },
          {
            to: "/Running-from-monday",
            label: "Running from monday alone in my head",
          },
          {
            to: "/riff-and-runs",
            label: "Riff & Runs",
          },
          {
            to: "/african-heat",
            label: "African heat",
          },
          {
            to: "/saturday-was-good",
            label: "Saturday was good",
          },
          {
            to: "/Running-from-monday",
            label: "Running from monday alone in my head",
          },
        ],
      },
    ],
  },
]

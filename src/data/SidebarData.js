import { Message as MessageIcon, Inbox as InboxIcon, Drafts as DraftsIcon,
BookmarkBorder as BookmarkBorderIcon, People as PeopleIcon, Apps as AppsIcon } from "@material-ui/icons";

export const sidebarItemsData = [
    {
        icon:<MessageIcon/>,
        text:"Thread"
    },
    {
        icon:<InboxIcon/>,
        text:"All DMs"
    },
    {
        icon:<DraftsIcon/>,
        text:"Mentions & Reactions"
    },
    {
        icon:<BookmarkBorderIcon/>,
        text:"Save Items"
    },
   {
        icon:<PeopleIcon/>,
        text:"Peoples & Groups"
    },
    {
        icon:<AppsIcon/>,
        text:"More"
    }


]
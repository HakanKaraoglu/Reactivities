import React from "react";
import {Card, Image, CardHeader, CardMeta, CardDescription, CardContent, ButtonGroup, Button} from "semantic-ui-react";
import {useStore} from "../../../app/stores/store.ts";
import LoadingComponent from "../../../app/layout/LoadingComponents.tsx";
import {observer} from "mobx-react-lite";

export default observer(function ActivityDetails() {

    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if (!activity) return <LoadingComponent/>;

    return (
        <Card fluid={true}>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup width='2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectedActivity} basic color='green' content='Cancel'/>
                </ButtonGroup>
            </CardContent>
        </Card>
    )
})
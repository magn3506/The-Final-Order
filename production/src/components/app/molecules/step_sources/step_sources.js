import React from 'react';
import {Label, LabelDescription, AddSourcesCon, Input, TitleInputTitle, TitleInputURL, InputCon, Button} from './step_sources_styles';

const StepSources = ({AddSources, handleChangeSourceTitle, handleChangeSourceURL, sourceTitle, URL}) => {
    return (
        <div>
            <Label> Sources 
                <LabelDescription>Add link to webpages or files for your students to read relating to the topic.</LabelDescription>
            </Label>
            <AddSourcesCon>
                <InputCon>
                    <TitleInputTitle>Title</TitleInputTitle>
                    <Input value={sourceTitle.title} onChange={e => handleChangeSourceTitle(e)} placeholder="Wikipedia" />
                </InputCon>
                <InputCon>
                    <TitleInputURL>Url</TitleInputURL>
                    <Input value={URL.url} onChange={e => handleChangeSourceURL(e)} placeholder="www.wikipedia.com" />
                </InputCon>
                <Button onClick={AddSources} type="button">Add</Button>
            </AddSourcesCon>
        </div>
    )
}

export default StepSources;

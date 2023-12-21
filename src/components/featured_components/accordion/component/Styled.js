import styled from "styled-components"

export const AccordionContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: fit-content;
    margin: 2rem auto 0 auto;
    gap: 3px;
    box-shadow: var(--soft-shadow);

    input { 
        display: none;
    }

    .box {
        position: relative;
        background-color: #fff;
        border-bottom: 1px solid #ededed;
        overflow: hidden;
        transition: all .5s ease-in-out;
        user-select: none;
    }

    .box-title {
        width: 100%;
        display: inline-block;
        cursor: pointer;
        padding: 1rem;
    }

    .box-content {
        padding: 0 1rem 1rem 1rem;
        display: none;
    }

    .box-close {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
        display: none;
    }
    
    input:checked + .box {
        height: auto;
    }

    input:checked + .box .box-content {
        max-height: 1000rem;
    }

    input:checked + .box .box-content,
    input:checked + .box .box-close {
        display: inline-block;
    }

    .box-title:before {
        content: "";
        position: absolute;
        top: 24px;
        right: 11px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid var(--light-gray);
        transform: translateY(-50%);
        transform-origin: top;
        transition: transform .5s;
    }

    input:checked + .box .box-title:before {
        transform: rotateX(180deg);
        border-top: 7px solid var(--pale-red);
    }
`
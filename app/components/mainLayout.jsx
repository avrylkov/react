import React from 'react';
import {Link} from 'react-router-dom'

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <h1>How to do React Js (MainLayout)</h1>
                <main>
                </main>

                <table>
                    <tbody>
                    <tr>
                        <td>
                        </td>
                        <td>
                            {this.props.children}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

